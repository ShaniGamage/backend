import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from 'src/dto/post.dto';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) { }

    @Post('')
    async createPost(@Body() body: PostDto) {
        console.log('post creating endpoint hit')
        try {
            const result = await this.postService.createPost(body)
            return result
        } catch (error) {
            throw error
        }

    }

    @Get()
    async getHeapCodeStatistics() {
        try{
            const result = await this.postService.getPosts()
            return result
        }catch(err){
            throw err
        }

    }

}
