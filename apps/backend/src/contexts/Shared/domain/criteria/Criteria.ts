// Accept this import because the alternative is too complicated
import { Sort } from "mongodb";

export class Criteria {
  constructor(
    readonly filter: Record<string, unknown>,
    readonly options: Record<string, unknown> = {},
    readonly sort: Sort = {},
    readonly skip: number = 0,
    readonly limit: number = 0,
  ) { }

  getOptions() {
    return this.options;
  }

  getFilters() {
    return this.filter;
  }

  getSort() {
    return this.sort;
  }

  getLimit() {
    return this.limit;
  }

  getSkip() {
    return this.skip;
  }

  hasFilters(): boolean {
    return Object.keys(this.filter).length > 0;
  }
}
