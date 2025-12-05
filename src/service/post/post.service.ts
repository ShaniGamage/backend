import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { PostDto } from 'src/dto/post.dto';
import { Post } from 'src/models/post';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    private readonly logger = new Logger(PostService.name)

    constructor(
        @InjectRepository(Post)
        private readonly postRepo: Repository<Post>
    ) { }

    async createPost(data: PostDto) {
        try {
            if (data.anonymous) {
                data.userId = ''
            }

            data.createdAt = new Date()
            const post = this.postRepo.create(data)
            await this.postRepo.save(post)

            return { success: true, message: 'Post added successfully' }
        } catch (err) {
            this.logger.error('Post adding failed', err)
            throw err
        }
    }

    async getPosts() {
        try {
            const posts = await this.postRepo.find({
                order: { createdAt: 'DESC' },
            });

            return { success: true, data: posts };
        } catch (err) {
            console.error('error getting posts:', err);
            throw err;
        }
    }
}
