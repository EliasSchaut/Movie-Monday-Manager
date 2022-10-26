import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class MovieDBService {

  constructor(private readonly prisma: PrismaService) {}

  async get(movie_id : Prisma.MovieWhereUniqueInput) {
    return await this.prisma.movie.findUnique({
      where: movie_id,
    });
  }

  async get_all() {
    return await this.prisma.movie.findMany();
  }

  async add(data: Prisma.MovieCreateInput) {
    return await this.prisma.movie.create({ data });
  }

  async delete(movie_id : Prisma.MovieWhereUniqueInput) {
    return await this.prisma.movie.delete({ where: movie_id });
  }

}
