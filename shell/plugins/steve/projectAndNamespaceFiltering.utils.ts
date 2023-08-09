import { NAMESPACE_FILTER_NS_FULL_PREFIX, NAMESPACE_FILTER_P_FULL_PREFIX } from '@shell/utils/namespace-filter';
import { getPerformanceSetting } from '@shell/utils/settings';

export interface OptPagination {
  namespaces?: string[];
  page: number,
  pageSize: number,
  sort: { field: string, asc: boolean }[],
  filter: { field: string, value: string }[]
}

// TODO: RC persist from response
export interface StorePagination {
  request: OptPagination,
  result: {
    count: number,
    pages: number
  }
}

// TODO: RC
export type FindAllOpt = {
  [key: string]: any,
  namespaced?: string[],
  pagination?: OptPagination,
}

class ProjectAndNamespaceFiltering {
  static param = 'projectsornamespaces'

  /**
   * Does the request `opt` definition require resources are fetched from a specific set namespaces/projects?
   */
  isApplicable(opt: FindAllOpt): boolean {
    return Array.isArray(opt.namespaced);
  }

  isEnabled(rootGetters: any): boolean {
    const currentProduct = rootGetters['currentProduct'];

    // Only enable for the cluster store at the moment. In theory this should work in management as well, as they're both 'steve' stores
    if (currentProduct?.inStore !== 'cluster') {
      return false;
    }

    if (currentProduct?.showWorkspaceSwitcher) {
      return false;
    }

    const perfConfig = getPerformanceSetting(rootGetters);

    if (!perfConfig.forceNsFilterV2?.enabled) {
      return false;
    }

    return true;
  }

  /**
   * Check if `opt` requires resources from specific ns/projects, if so return the required query param (x=y)
   */
  checkAndCreateParam(opt: FindAllOpt): string {
    if (!this.isApplicable(opt)) {
      return '';
    }

    return this.createParam(opt.namespaced);
  }

  public createParam(namespaceFilter: string[] | undefined): string {
    if (!namespaceFilter || !namespaceFilter.length) {
      return '';
    }

    // TODO: RC test n and p filtering outside of pagination

    debugger;
    const namespaces = namespaceFilter.reduce((res, n) => {
      const name = n
        .replace(NAMESPACE_FILTER_NS_FULL_PREFIX, '')
        .replace(NAMESPACE_FILTER_P_FULL_PREFIX, '');

      if (name.startsWith('-')) {
        res.exclude.push(n.substring(1, n.length));
      } else {
        res.include.push(name);
      }

      return res;
    }, { include: [] as string[], exclude: [] as string[] });

    let res = '';

    console.warn('pAndNUtil', 'createParam', namespaces.include, namespaces.exclude);

    if (namespaces.include.length) {
      res = `${ ProjectAndNamespaceFiltering.param }=${ namespaces.include.join(',') }`;
    }

    if (namespaces.exclude.length) {
      res = `${ ProjectAndNamespaceFiltering.param }!=${ namespaces.exclude.join(',') }`;
    }

    return res;
  }
}

export default new ProjectAndNamespaceFiltering();
