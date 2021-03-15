import { data202003 } from "./official-data/202003";
import { data202004 } from "./official-data/202004";
import { data202005 } from "./official-data/202005";
import { data202006 } from "./official-data/202006";
import { data202007 } from "./official-data/202007";
import { data202008 } from "./official-data/202008";
import { data202009 } from "./official-data/202009";
import { data202010 } from "./official-data/202010";
import { data202011 } from "./official-data/202011";
import { data202012 } from "./official-data/202012";
import { data202101 } from "./official-data/202101";
import { data202102 } from "./official-data/202102";
import { data202103 } from "./official-data/202103";
import { data202104 } from "./official-data/202104";

// data20XXXX are js objects of type `IOfficialData`
// Check IOfficialData.d.ts for more information
export const officialData = {
  ...data202003,
  ...data202004,
  ...data202005,
  ...data202006,
  ...data202007,
  ...data202008,
  ...data202009,
  ...data202010,
  ...data202011,
  ...data202012,
  ...data202101,
  ...data202102,
  ...data202103,
  ...data202104,
};