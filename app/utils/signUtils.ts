import hdxData from "~/data/hdx.json";

export interface SignRecord {
  no: string;
  qt: string;
  jx: string;
  qs: string;
  jy: string;
  xj: string;
}

export function getRandomSign(): SignRecord {
  const records = hdxData.records as SignRecord[];
  const randomIndex = Math.floor(Math.random() * records.length);
  return records[randomIndex];
}

export function getAllSigns(): SignRecord[] {
  return hdxData.records as SignRecord[];
}

export function getSignByNumber(no: string): SignRecord | undefined {
  const records = hdxData.records as SignRecord[];
  return records.find(record => record.no === no);
}
