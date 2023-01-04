export interface IGenericRepository {
    list<T>(): T;
    create<T>(args: T): Promise<T>;
    findById<T>(args: string): Promise<T | void>;
    delete?<T>(args: string): Promise<T>;
}
