import { ApiTags } from "@nestjs/swagger";
import { Controller } from "@nestjs/common";
import { AdminService } from "./admin.service";

/**
 * Controller for admin related routes
 */
@ApiTags('admin')
@Controller('admin')
export class AdminController {

  constructor(private readonly adminService: AdminService) {}


}
