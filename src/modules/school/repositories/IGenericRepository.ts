export interface IGenericRepository<T, K> {
    list?(): Promise<T[] | void>;
    create?(args: K): Promise<T>;
    findById?(args: string): Promise<T | void>;
    delete?(args: string): Promise<void>;
}
