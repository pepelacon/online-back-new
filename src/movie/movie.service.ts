import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
// import { TelegramService } from 'src/telegram/telegram.service'

import { UpdateMovieDto } from './update-movie.dto'
import { MovieModel } from './movie.model'

@Injectable()
export class MovieService {
	constructor(
		@InjectModel(MovieModel) private readonly movieModel: ModelType<MovieModel>
	) {}

	async getAll(searchTerm?: string) {
		let options = {}

		if (searchTerm) {
			options = {
				$or: [
					{
						title: new RegExp(searchTerm, 'i'),
					},
				],
			}
		}

		return this.movieModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.populate('genres actors')
			.exec()
	}

	async bySlug(slug: string): Promise<DocumentType<MovieModel>> {
		return this.movieModel.findOne({ slug }).populate('genres actors').exec()
	}

	async byActor(actorId: Types.ObjectId): Promise<DocumentType<MovieModel>[]> {
		return this.movieModel.find({ actors: actorId }).exec()
	}

	async byGenres(genreIds: Types.ObjectId[]) {
		return this.movieModel.find({ genres: { $in: genreIds } }).exec()
	}

	async updateCountOpened(slug: string) {
		return this.movieModel
			.findOneAndUpdate({ slug }, { $inc: { countOpened: 1 } }, { new: true })
			.exec()
	}

	/* Admin area */

	async byId(id: string) {
		return this.movieModel.findById(id).exec()
	}

	async create() {
		const defaultValue: UpdateMovieDto = {
			bigPoster: '',
			actors: [],
			genres: [],
			poster: '',
			title: '',
			videoUrl: '',
			slug: '',
		}
		const movie = await this.movieModel.create(defaultValue)
		return movie._id
	}

	async update(id: string, dto: UpdateMovieDto) {
		// if (!dto.isSendTelegram) {
		// 	await this.sendNotifications(dto)
		// 	dto.isSendTelegram = true
		// }

		return this.movieModel.findByIdAndUpdate(id, dto, { new: true }).exec()
	}

	async delete(id: string) {
		const deleteDoc = this.movieModel.findByIdAndDelete(id).exec()
		if (!deleteDoc) throw new NotFoundException('Movie not found')
		return deleteDoc
	}

	async getMostPopular() {
		return this.movieModel
			.find({ countOpened: { $gt: 0 } })
			.sort({ countOpened: -1 })
			.populate('genres')
			.exec()
	}

	async updateRating(id: Types.ObjectId, newRating: number) {
		return this.movieModel
			.findByIdAndUpdate(id, { rating: newRating }, { new: true })
			.exec()
	}

	// async sendNotifications(dto: UpdateMovieDto) {
	// 	if (process.env.NODE_ENV !== 'development')
	// 		await this.telegramService.sendPhoto(dto.poster)

	// 	const msg = `<b>${dto.title}</b>\n\n`

	// 	await this.telegramService.sendMessage(msg, {
	// 		reply_markup: {
	// 			inline_keyboard: [
	// 				[
	// 					{
	// 						url: 'https://okko.tv/movie/free-guy',
	// 						text: '🍿 Go to watch',
	// 					},
	// 				],
	// 			],
	// 		},
	// 	})
	// }
}
