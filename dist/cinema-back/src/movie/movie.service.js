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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const telegram_service_1 = require("../../../src/telegram/telegram.service");
const movie_model_1 = require("./movie.model");
let MovieService = class MovieService {
    constructor(movieModel, telegramService) {
        this.movieModel = movieModel;
        this.telegramService = telegramService;
    }
    async getAll(searchTerm) {
        let options = {};
        if (searchTerm) {
            options = {
                $or: [
                    {
                        title: new RegExp(searchTerm, 'i'),
                    },
                ],
            };
        }
        return this.movieModel
            .find(options)
            .select('-updatedAt -__v')
            .sort({ createdAt: 'desc' })
            .populate('genres actors')
            .exec();
    }
    async bySlug(slug) {
        return this.movieModel.findOne({ slug }).populate('genres actors').exec();
    }
    async byActor(actorId) {
        return this.movieModel.find({ actors: actorId }).exec();
    }
    async byGenres(genreIds) {
        return this.movieModel.find({ genres: { $in: genreIds } }).exec();
    }
    async updateCountOpened(slug) {
        return this.movieModel
            .findOneAndUpdate({ slug }, { $inc: { countOpened: 1 } }, { new: true })
            .exec();
    }
    async byId(id) {
        return this.movieModel.findById(id).exec();
    }
    async create() {
        const defaultValue = {
            bigPoster: '',
            actors: [],
            genres: [],
            poster: '',
            title: '',
            videoUrl: '',
            slug: '',
        };
        const movie = await this.movieModel.create(defaultValue);
        return movie._id;
    }
    async update(id, dto) {
        if (!dto.isSendTelegram) {
            await this.sendNotifications(dto);
            dto.isSendTelegram = true;
        }
        return this.movieModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async delete(id) {
        const deleteDoc = this.movieModel.findByIdAndDelete(id).exec();
        if (!deleteDoc)
            throw new common_1.NotFoundException('Movie not found');
        return deleteDoc;
    }
    async getMostPopular() {
        return this.movieModel
            .find({ countOpened: { $gt: 0 } })
            .sort({ countOpened: -1 })
            .populate('genres')
            .exec();
    }
    async updateRating(id, newRating) {
        return this.movieModel
            .findByIdAndUpdate(id, { rating: newRating }, { new: true })
            .exec();
    }
    async sendNotifications(dto) {
        await this.telegramService.sendPhoto('https://www.google.com/aclk?sa=L&ai=DChcSEwiVpcnS7-KDAxVD7uMHHQvuCKMYABABGgJ5bQ&ase=2&gclid=CjwKCAiA75itBhA6EiwAkho9e5udGcIR3f7n7jP1jQdRZsGgZd3KbbiVfsEdlsZhxfbm-dKSLcF6aBoCPeoQAvD_BwE&sig=AOD64_0dJvoXVn9AFTOhspdE3Czr7qg95Q&ctype=5&nis=6&adurl&ved=2ahUKEwjU1rHS7-KDAxW0kokEHYfcCJIQvhd6BAgBEHw');
        const msg = `<b>${dto.title}</b>\n\n`;
        await this.telegramService.sendMessage(msg, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            url: 'https://okko.tv/movie/free-guy',
                            text: '🍿 Go to watch',
                        },
                    ],
                ],
            },
        });
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(movie_model_1.MovieModel)),
    __metadata("design:paramtypes", [Object, telegram_service_1.TelegramService])
], MovieService);
//# sourceMappingURL=movie.service.js.map