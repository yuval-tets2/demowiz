import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FdServiceBase } from "./base/fd.service.base";

@Injectable()
export class FdService extends FdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
