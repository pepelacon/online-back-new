/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
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
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { UpdateMovieDto } from './update-movie.dto';
import { MovieModel } from './movie.model';
export declare class MovieService {
    private readonly movieModel;
    constructor(movieModel: ModelType<MovieModel>);
    getAll(searchTerm?: string): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, MovieModel> & Omit<MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>[]>;
    bySlug(slug: string): Promise<DocumentType<MovieModel>>;
    byActor(actorId: Types.ObjectId): Promise<DocumentType<MovieModel>[]>;
    byGenres(genreIds: Types.ObjectId[]): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, MovieModel> & Omit<MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    updateCountOpened(slug: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, MovieModel> & Omit<MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    byId(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, MovieModel> & Omit<MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    create(): Promise<Types.ObjectId>;
    update(id: string, dto: UpdateMovieDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, MovieModel> & Omit<MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, MovieModel> & Omit<MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>>;
    getMostPopular(): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, MovieModel> & Omit<MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>[]>;
    updateRating(id: Types.ObjectId, newRating: number): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, MovieModel> & Omit<MovieModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
}
