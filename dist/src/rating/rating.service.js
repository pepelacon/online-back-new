"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const rating_model_1 = require("./rating.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const movie_service_1 = require("../movie/movie.service");
const mongoose_1 = require("mongoose");
let RatingService = class RatingService {
    constructor(RatingModel, MovieService) {
        this.RatingModel = RatingModel;
        this.MovieService = MovieService;
    }
    async averageRatingbyMovie(movieId) {
        const ratingsMovie = await this.RatingModel.aggregate()
            .match({ movieId: new mongoose_1.Types.ObjectId(movieId) })
            .exec();
        return (ratingsMovie.reduce((acc, item) => acc + item.value, 0) /
            ratingsMovie.length);
    }
    async setRating(userId, dto) {
        const { movieId, value } = dto;
        const newRating = await this.RatingModel.findOneAndUpdate({ movieId, userId }, {
            userId,
            movieId,
            value,
        }, { upsert: true, new: true, setDefaultsOnInsert: true }).exec();
        const averageRating = await this.averageRatingbyMovie(movieId);
        await this.MovieService.updateRating(movieId, averageRating);
        return newRating;
    }
    async getMovieValueByUser(movieId, userId) {
        return this.RatingModel.findOne({ movieId, userId })
            .select('value')
            .exec()
            .then((data) => (data ? data.value : 0));
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(rating_model_1.RatingModel)),
    __metadata("design:paramtypes", [Object, movie_service_1.MovieService])
], RatingService);
//# sourceMappingURL=rating.service.js.map