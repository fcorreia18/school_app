export interface IGenericRepository<T, K> {
    list?(): Promise<T[] | void>;
    create?(args: K): Promise<T>;
    update?(args: T): Promise<T | void>;
    findById?(args: string): Promise<T | void>;
    delete?(args: string): Promise<void>;
}
