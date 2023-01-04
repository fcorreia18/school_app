export interface IGenericRepository<T> {
    list(): Promise<T>;
    create(args: T): Promise<T>;
    findById(args: string): Promise<T | void>;
    delete?(args: string): Promise<T>;
}
