import { Module } from "@nestjs/common";
import { MovieDBModule } from "../../common/db_services/movies/movieDB.module";
import { UserDBModule } from "../../common/db_services/users/userDB.module";
import { VoteDBModule } from "../../common/db_services/votes/voteDB.module";
import { HistoryDBModule } from "../../common/db_services/histroy/historyDB.module";
import { WatchListDBModule } from "../../common/db_services/watchlist/watchListDB.module";
import { AdminController } from "./admin.controller";
import { PrismaService } from "../../common/db_services/prisma.service";
import { AdminService } from "./admin.service";

@Module({
  imports: [MovieDBModule, UserDBModule, VoteDBModule, HistoryDBModule, WatchListDBModule],
  controllers: [AdminController],
  providers: [PrismaService, AdminService]
})
export class AdminModule {}
