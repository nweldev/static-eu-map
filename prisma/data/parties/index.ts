import { Alliance, Countrie, Party, PrismaClient } from '@prisma/client';
import { ItaAllianceCode, ItaPartyCode, itaPartiesSeed } from './ita.ts';
import { CountryCode } from '../countries.ts';

export type PartyCode = ItaPartyCode;
export type AllianceCode = ItaAllianceCode;

export type PartiesAndAlliances = Partial<
  Record<
    CountryCode,
    {
      parties: Record<string, Party>;
      alliances: Record<string, Alliance>;
    }
  >
>;

export async function partiesSeed(prisma: PrismaClient, countries: Record<string, Countrie>) {
  const parties: PartiesAndAlliances = {
    ita: await itaPartiesSeed(prisma, countries.ita.id),
  };
  return parties;
}
