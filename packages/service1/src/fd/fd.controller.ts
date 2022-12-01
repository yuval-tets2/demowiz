import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FdService } from "./fd.service";
import { FdControllerBase } from "./base/fd.controller.base";

@swagger.ApiTags("fds")
@common.Controller("fds")
export class FdController extends FdControllerBase {
  constructor(
    protected readonly service: FdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
