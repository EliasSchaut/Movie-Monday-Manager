import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { ProfileModule } from './profile/profile.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { MovieDBModule } from './common/db_services/movies/movieDB.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [AuthModule, ProfileModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
    MovieDBModule,
    MovieModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
