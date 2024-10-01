import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [PostsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
