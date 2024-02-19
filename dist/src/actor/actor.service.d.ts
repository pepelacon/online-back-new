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
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ActorModel } from './actor.model';
import { ActorDto } from './actor.dto';
export declare class ActorService {
    private readonly ActorModel;
    constructor(ActorModel: ModelType<ActorModel>);
    bySlug(slug: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ActorModel> & Omit<ActorModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getAll(searchTerm?: string): Promise<any[]>;
    byId(_id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ActorModel> & Omit<ActorModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    create(): Promise<import("mongoose").Types.ObjectId>;
    update(id: string, dto: ActorDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ActorModel> & Omit<ActorModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ActorModel> & Omit<ActorModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>>;
}
