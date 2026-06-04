import { Injectable, OnModuleInit, Logger } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

const logger = new Logger('PrismaService')

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    if (!process.env.DATABASE_URL) {
      logger.warn('DATABASE_URL is not set — skipping Prisma connect')
      return
    }

    try {
      await this.$connect()
      logger.log('Connected to database')
    } catch (err) {
      logger.error('Failed to connect to database', err as any)
      // don't rethrow so the app can still boot for dev without a DB
    }
  }
}
