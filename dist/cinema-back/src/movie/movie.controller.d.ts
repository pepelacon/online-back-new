/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
import { UpdateMovieDto } from './update-movie.dto';
import { MovieService } from './movie.service';
import { Types } from 'mongoose';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    bySlug(slug: string): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel>>;
    byActor(actorId: Types.ObjectId): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel>[]>;
    byGenres(genreIds: Types.ObjectId[]): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./movie.model").MovieModel> & Omit<import("./movie.model").MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    getAll(): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./movie.model").MovieModel> & Omit<import("./movie.model").MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>[]>;
    getMostPopular(): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./movie.model").MovieModel> & Omit<import("./movie.model").MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>[]>;
    updateCountOpened(slug: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./movie.model").MovieModel> & Omit<import("./movie.model").MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    get(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./movie.model").MovieModel> & Omit<import("./movie.model").MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    create(): Promise<Types.ObjectId>;
    update(id: string, dto: UpdateMovieDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./movie.model").MovieModel> & Omit<import("./movie.model").MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    delete(id: string): Promise<void>;
}
