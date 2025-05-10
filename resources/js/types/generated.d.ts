declare namespace RebelScan.Core.DTO {
export type GeneralSettingsDTO = {
wsdl: string;
ws_login: string;
ws_password: string;
ws_pool: string;
ws_config: string;
ws_timeout: boolean;
ws_limit: boolean;
};
export type InventorySettingsDTO = {
product_status: Array<string>;
adc_transaction: string;
stock_change_transaction: string;
misc_receipt_transaction: string;
count_variance_threshold: number;
verify_location: boolean;
use_pallet_number: boolean;
};
export type PermissionDTO = {
id: number;
name: string;
};
export type RoleDTO = {
id: number;
name: string;
default: boolean;
};
export type SettingsDTO = {
id: number;
name: string;
key: string;
value: any;
context: string;
type: string;
};
export type UserDTO = {
id: number;
name: string;
username: string;
default_locale: RebelScan.Core.Enums.Locale;
site: string;
created_at: string;
updated_at: string;
role: RebelScan.Core.DTO.RoleDTO;
has_sessions: boolean | null;
permissions: Record<RebelScan.Core.Enums.Permissions, boolean>;
};
}
declare namespace RebelScan.Core.Enums {
export type Locale = 'en' | 'fr';
export type LocationSortContext = 'picking' | 'counts' | 'putaway';
export type Modules = 'Inventory' | 'BinMove' | 'MiscReceipts' | 'StockChange' | 'TruckLoading' | 'Reintegration' | 'PickingWithDelivery' | 'MaterialIssue' | 'ProductionTracking' | 'Deliveries' | 'Putaway' | 'MiscIssues' | 'SplitPallets' | 'Receiving' | 'Counts' | 'ShopFloorControl' | 'IntersiteTransfers';
export type Permissions = 'Manage settings' | 'Manage roles' | 'Manage users' | 'Manage locations' | 'Manage activities';
}
declare namespace RebelScan.Core.Integrations.UPS.DTO.Common {
export type Service = '01' | '02' | '03' | '07' | '08' | '11' | '12' | '13' | '14' | '17' | '54' | '59' | '65' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6' | 'M7' | '70' | '71' | '72' | '74' | '75' | '82' | '83' | '84' | '85' | '86' | '96';
}
declare namespace RebelScan.Core.Integrations.UPS.DTO.Common.Enums {
export type Packaging = '01' | '02' | '03' | '04' | '21' | '24' | '25' | '30' | '2a' | '2b' | '2c' | '56' | '57' | '58' | '59' | '60' | '61' | '62' | '63' | '64' | '65' | '66' | '67';
}
declare namespace RebelScan.Core.Registries.PageRegistry {
export type Page = {
category: RebelScan.Core.Registries.PageRegistry.Enums.Categories | string;
title: string;
route: string;
url: string;
icon: string;
};
}
declare namespace RebelScan.Core.Registries.PageRegistry.Enums {
export type Categories = 'Inventory Management' | 'Warehouse Operations' | 'Shipping & Delivery' | 'Production' | 'Shop Floor Control';
}
declare namespace RebelScan.Core.SDK.DTO {
export type XX3DWL2POH = {
FCY: string;
BPSNUM: string;
BPSNAM: string;
};
export type XX3DWREITM_QUAFLG = 'NO_CONTROL' | 'NON_CHANGEABLE_CONTROL' | 'CHANGEABLE_CONTROL' | 'PERIODIC_CONTROL';
export type XX3DWL1POH = {
NBLIG: number;
POHNUM: string;
ORDDAT: string;
ORDREF: string;
BUY: string;
APPFLG: number;
RCPFLG: number;
OCNNUM: string;
TOTORD: number;
TTVORD: number;
CUR: string;
BPSNUM: string;
};
export type XX3DWLSFCY = {
FCY: string;
};
export type XX3DWLSLOC = {
LOC: string;
LOCCAT: number;
};
export type XX3DWLSMFG = {
MFGNUM: string;
YFIRSTLIN: string;
};
export type XX3DWLSMMK = {
MFGNUM: string;
MFGLIN: number;
ITMREF: string;
TEXTE: string;
MFGSTA: number;
BOMOPE: number;
RETQTY: number;
USEQTY: number;
ALLQTY: number;
ALLSTA: number;
XSTOMGTTYP: number;
};
export type XX3DWLSOPE = {
OPENUM: number;
OPESPLNUM: number;
STDWST: string;
EXTWST: string;
CPLWST: string;
STDLAB: string;
EXTLAB: string;
CPLLAB: string;
};
export type XX3DWLSPUT = {
LOC: string;
};
export type XX3DWLSSDH = {
SDHNUM: string;
BPCORD: string | null;
SHIDAT: string;
CFMFLG: boolean;
CFMFLG_LBL: string;
BPCNAM: string;
BPAADD: string;
ALLLINESPICKED: boolean;
LINECOUNT: number;
PRIORITY: number;
YDESTINATION: string | null;
assignees: Array<any> | null;
};
export type XX3DWLSSNL = {
CUNSSSDES: string;
CUNSSSSTA: string;
CUNSSSSTANUM: number;
CUNLISNUM: string;
CUNLISSTA: string;
IPTDAT: string;
NBRLIG: number;
USR: string;
MVTDES: string;
FIRSTLOC: string;
LASTLOC: string;
NNBRLOC: number;
};
export type XX3DWLSSNX = {
CUNSSSNUM: string;
CUNSSSDES: string;
CUNSSSSTA: string;
NBRCUNLIS: number;
NBRLIG: number;
NNBRLOC: number;
};
export type XX3DWLSSTA = {
DOCNUM: string;
LINNUM: number;
ITMREF: string;
QTYSTU: number;
XQTYREM: number;
STU: string;
XSTOMGTTYP: number;
STA_STU: string;
STA_QTY: number;
STA_LOC: string;
STA_STA: string;
STA_LOT: string | null;
STA_SUBLOT: string | null;
STA_SERNUM: string | null;
STA_PALNUM: string | null;
ITMDES1: string | null;
};
export type XX3DWLSWST = {
WST: string;
WSTDES: string;
WSTTYP: RebelScan.Core.SDK.DTO.XX3DWLSWST_WSTTYP;
WCR: string;
};
export type XX3DWLSYTL = {
data: Array<RebelScan.Core.SDK.DTO.XX3DWLSYTL_DATA> | Array<any>;
status: RebelScan.Core.SDK.DTO.XX3DWLSYTL_STATUS;
};
export type XX3DWLSYTL_DATA = {
SDHNUM: string;
PACNUM: string;
SCCCOD: string;
ITMREF: string;
TRUCK: number;
LOADED: boolean;
LOT: string | null;
};
export type XX3DWLSYTL_STATUS = {
OVRLOADED: boolean;
FLOC: string | null;
};
export type XX3DWREAPL = {
LANMES: string;
LANNUM: number;
};
export type XX3DWLSWST_WSTTYP = 0 | 1 | 2;
export type XX3DWREITM = {
data: RebelScan.Core.SDK.DTO.XX3DWREITM_DATA;
DEFLOC: Array<RebelScan.Core.SDK.DTO.XX3DWREITM_DEFLOC>;
UOM: Array<RebelScan.Core.SDK.DTO.XX3DWREITM_UOM>;
EXISTS: boolean;
};
export type XX3DWREITM_DATA = {
XSTOMGTTYP: number;
EXYMGTCOD: number;
CSTTYP: string;
CSSTOT: number;
UOM: string;
ITMDES1: string;
DEFLOCREC: string;
QUAFLG: RebelScan.Core.SDK.DTO.XX3DWREITM_QUAFLG;
};
export type XX3DWREITM_DEFLOC = {
DEFLOCDESC: string;
DEFLOC: string | null;
};
export type XX3DWREITM_UOM = {
ARRUOM: string;
ARRUOMCONV: number;
};
export type XX3DWRELBL = {
BPDNAM: string | null;
BPDADDLIG: string | null;
BPDPOSCOD: string | null;
BPDCTY: string | null;
BPDSAT: string | null;
BPDCRY: string | null;
};
export type XX3DWREMFG = {
MFGNUM: string;
MFGLIN: number;
MFGSTA: number;
MFGFCY: string;
STRDAT: string;
ENDDAT: string;
STU: string;
RELUOM: string;
EXTQTY: number;
CPLQTY: number;
ITMREF: string;
TEXTE: string;
LOT: string | null;
};
export type XX3DWREPOH = {
POPLIN: number;
ITMREF: string;
ITMREFBPS: string;
ITMDES: string;
QTYSTU: number;
STU: string;
QTYPUU: number;
PUU: string;
RCPQTYSTU: number;
RCPQTYPUU: number;
BPSNUM: string;
PRHFCY: string;
EXTRCPDAT: string;
XSTOMGTTYP: number;
EXYMGTCOD: number;
TOTAL_PUU: number;
TOTAL_STU: number;
};
export type XX3DWRESDH = {
SDHNUM: string;
LINNUM: number;
ITMREF: string;
QTYSTU: number;
QTYPCU: number;
STU: string;
PCU: string;
PCUSTUCOE: number;
XSTOMGTTYP: number;
STA_STU: string;
STA_QTYSTU: number;
STA_PCU: string;
STA_QTYPCU: number;
STA_LOC: string;
STA_STA: string;
STOCOU: number;
SEQ: number;
STA_LOT: string | null;
STA_SUBLOT: string | null;
STA_SERNUM: string | null;
STA_PALNUM: string | null;
ITMDES1: string | null;
BPCORD: string | null;
BPDNAM: string | null;
BPDADDLIG: string | null;
BPDPOSCOD: string | null;
BPDCTY: string | null;
BPDSAT: string | null;
BPDCRY: string | null;
};
export type XX3DWRESEL = {
VALUE: string;
DESCRIPTION: string;
};
export type XX3DWRESNL = {
USR: string;
ITMLISNUM: number;
ITMREF: string;
LOT: string;
SLO: string;
LOC: string;
STA: string;
CUNDAT: string;
PCU: string;
QTYPCU: number;
PCUSTUCOE: number;
QTYSTU: number;
SERNUM: string;
CUNLISSTA: string;
PALNUM: string;
LPNNUM: string;
STOFLD1: string;
STOFLD2: string;
CUNCST: number;
STOCOU: number;
QTYPCUNEW: number;
};
export type XX3DWRESTO = {
NBLIG: number;
ITMREF: string;
ITMDES1: string;
QTYPCU: number;
PCU: string;
LOC: string;
STA: string;
CUMALLQTY: number;
CUNFLG: number;
LASRCPDAT: string;
SHLDAT: string;
DEFLOC0: string;
DEFLOC1: string;
DEFLOC2: string;
EANCOD: string;
LOTCREDAT: string;
XSTOMGTTYP: number;
PCUSTUCOE: number;
UPC: string;
REFPER: string | null;
GTIN: string | null;
LOT: string | null;
SLO: string | null;
SERNUM: string | null;
PALNUM: string | null;
CTRNUM: string | null;
BPSLOT: string | null;
ECCVALMAJ: string | null;
ITMDES2: string | null;
ITMDES3: string | null;
};
}
