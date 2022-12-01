import { Module } from "@nestjs/common";
import { FdModuleBase } from "./base/fd.module.base";
import { FdService } from "./fd.service";
import { FdController } from "./fd.controller";
import { FdResolver } from "./fd.resolver";

@Module({
  imports: [FdModuleBase],
  controllers: [FdController],
  providers: [FdService, FdResolver],
  exports: [FdService],
})
export class FdModule {}
