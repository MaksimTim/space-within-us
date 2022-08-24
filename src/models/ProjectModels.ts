// типы проектов "Техпорт"
export interface Project {
    projectId: number;
    title: string;
}

export interface SearchProjectResponse {
    projects: Project[];
}

// тип целого проекта
export interface PrimaryTaxonomyNode {
    taxonomyNodeId: number;
    taxonomyRootId: number;
    parentNodeId: number;
    level: number;
    code: string;
    title: string;
    definition: string;
    hasChildren: boolean;
    publishedUrl: string;
}

export interface AdditionalTaxonomyNode {
    taxonomyNodeId: number;
    taxonomyRootId: number;
    parentNodeId: number;
    level: number;
    code: string;
    title: string;
    definition: string;
    hasChildren: boolean;
    publishedUrl: string;
}

export interface LkuCodeType {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Destination {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType;
    displayOrder: number;
}

export interface LkuCodeType2 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface SupportedMission {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType2;
    displayOrder: number;
}

export interface LkuCodeType3 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType3;
    displayOrder: number;
}

export interface LkuCodeType4 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType4;
    displayOrder: number;
}

export interface Location {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType5 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType5;
    displayOrder: number;
}

export interface MsiData {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface ResponsibleMd {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData;
    setAsideData: string[];
}

export interface Program {
    programId: number;
    acronym: string;
    active: boolean;
    description: string;
    parentProgram: string;
    parentProgramId: number;
    responsibleMd: ResponsibleMd;
    responsibleMdId: number;
    title: string;
}

export interface LkuCodeType6 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType2 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType6;
    displayOrder: number;
}

export interface LkuCodeType7 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country2 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType7;
    displayOrder: number;
}

export interface Location2 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType2;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country2;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType8 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType2 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType8;
    displayOrder: number;
}

export interface MsiData2 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface ResponsibleMd3 {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location2;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType2;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData2;
    setAsideData: string[];
}

export interface ResponsibleMd2 {
    programId: number;
    acronym: string;
    active: boolean;
    description: string;
    parentProgram: string;
    parentProgramId: number;
    responsibleMd: ResponsibleMd3;
    responsibleMdId: number;
    title: string;
}

export interface LkuCodeType9 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType3 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType9;
    displayOrder: number;
}

export interface LkuCodeType10 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country3 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType10;
    displayOrder: number;
}

export interface Location3 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType3;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country3;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType11 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType3 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType11;
    displayOrder: number;
}

export interface MsiData3 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface LeadOrganization {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location3;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType3;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData3;
    setAsideData: string[];
}

export interface LkuCodeType12 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType4 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType12;
    displayOrder: number;
}

export interface LkuCodeType13 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country4 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType13;
    displayOrder: number;
}

export interface Location4 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType4;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country4;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType14 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType4 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType14;
    displayOrder: number;
}

export interface MsiData4 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface SupportingOrganization {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location4;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType4;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData4;
    setAsideData: string[];
}

export interface LkuCodeType15 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType5 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType15;
    displayOrder: number;
}

export interface LkuCodeType16 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country5 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType16;
    displayOrder: number;
}

export interface Location5 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType5;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country5;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType17 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType5 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType17;
    displayOrder: number;
}

export interface MsiData5 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface CoFundingPartner {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location5;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType5;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData5;
    setAsideData: string[];
}

export interface LkuCodeType18 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType6 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType18;
    displayOrder: number;
}

export interface LkuCodeType19 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country6 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType19;
    displayOrder: number;
}

export interface StatesWithWork {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType6;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country6;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType20 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType7 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType20;
    displayOrder: number;
}

export interface LkuCodeType21 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country7 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType21;
    displayOrder: number;
}

export interface Location6 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType7;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country7;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType22 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType8 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType22;
    displayOrder: number;
}

export interface LkuCodeType23 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country8 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType23;
    displayOrder: number;
}

export interface Location7 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType8;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country8;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType24 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType6 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType24;
    displayOrder: number;
}

export interface MsiData6 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface Organization {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location7;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType6;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData6;
    setAsideData: string[];
}

export interface ProgramDirector {
    contactId: number;
    displayOrder: number;
    fax: string;
    firstName: string;
    lastName: string;
    fullName: string;
    fullNameInverted: string;
    location: Location6;
    locationId: number;
    middleInitial: string;
    organization: Organization;
    prefix: string;
    primaryEmail: string;
    secondaryEmail: string;
    suffix: string;
    title: string;
    workPhoneExtension: string;
    workPhone: string;
    receiveEmail: number;
    isPublicEmail: boolean;
}

export interface LkuCodeType25 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType9 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType25;
    displayOrder: number;
}

export interface LkuCodeType26 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country9 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType26;
    displayOrder: number;
}

export interface Location8 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType9;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country9;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType27 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType10 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType27;
    displayOrder: number;
}

export interface LkuCodeType28 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country10 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType28;
    displayOrder: number;
}

export interface Location9 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType10;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country10;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType29 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType7 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType29;
    displayOrder: number;
}

export interface MsiData7 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface Organization2 {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location9;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType7;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData7;
    setAsideData: string[];
}

export interface ProgramManager {
    contactId: number;
    displayOrder: number;
    fax: string;
    firstName: string;
    lastName: string;
    fullName: string;
    fullNameInverted: string;
    location: Location8;
    locationId: number;
    middleInitial: string;
    organization: Organization2;
    prefix: string;
    primaryEmail: string;
    secondaryEmail: string;
    suffix: string;
    title: string;
    workPhoneExtension: string;
    workPhone: string;
    receiveEmail: number;
    isPublicEmail: boolean;
}

export interface LkuCodeType30 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType11 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType30;
    displayOrder: number;
}

export interface LkuCodeType31 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country11 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType31;
    displayOrder: number;
}

export interface Location10 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType11;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country11;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType32 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType12 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType32;
    displayOrder: number;
}

export interface LkuCodeType33 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country12 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType33;
    displayOrder: number;
}

export interface Location11 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType12;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country12;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType34 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType8 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType34;
    displayOrder: number;
}

export interface MsiData8 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface Organization3 {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location11;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType8;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData8;
    setAsideData: string[];
}

export interface ProjectManager {
    contactId: number;
    displayOrder: number;
    fax: string;
    firstName: string;
    lastName: string;
    fullName: string;
    fullNameInverted: string;
    location: Location10;
    locationId: number;
    middleInitial: string;
    organization: Organization3;
    prefix: string;
    primaryEmail: string;
    secondaryEmail: string;
    suffix: string;
    title: string;
    workPhoneExtension: string;
    workPhone: string;
    receiveEmail: number;
    isPublicEmail: boolean;
}

export interface LkuCodeType35 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType13 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType35;
    displayOrder: number;
}

export interface LkuCodeType36 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country13 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType36;
    displayOrder: number;
}

export interface Location12 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType13;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country13;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType37 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType14 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType37;
    displayOrder: number;
}

export interface LkuCodeType38 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country14 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType38;
    displayOrder: number;
}

export interface Location13 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType14;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country14;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType39 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType9 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType39;
    displayOrder: number;
}

export interface MsiData9 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface Organization4 {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location13;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType9;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData9;
    setAsideData: string[];
}

export interface PrincipalInvestigator {
    contactId: number;
    displayOrder: number;
    fax: string;
    firstName: string;
    lastName: string;
    fullName: string;
    fullNameInverted: string;
    location: Location12;
    locationId: number;
    middleInitial: string;
    organization: Organization4;
    prefix: string;
    primaryEmail: string;
    secondaryEmail: string;
    suffix: string;
    title: string;
    workPhoneExtension: string;
    workPhone: string;
    receiveEmail: number;
    isPublicEmail: boolean;
}

export interface LkuCodeType40 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType15 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType40;
    displayOrder: number;
}

export interface LkuCodeType41 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country15 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType41;
    displayOrder: number;
}

export interface Location14 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType15;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country15;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType42 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface LocationType16 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType42;
    displayOrder: number;
}

export interface LkuCodeType43 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface Country16 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType43;
    displayOrder: number;
}

export interface Location15 {
    locationId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    locationType: LocationType16;
    locationTypeId: number;
    state: string;
    stateTerritoryName: string;
    zip: string;
    zip2: string;
    NALocation: string;
    country: Country16;
    countryId: number;
    shortLocationString: string;
}

export interface LkuCodeType44 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface OrganizationType10 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType44;
    displayOrder: number;
}

export interface MsiData10 {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
}

export interface Organization5 {
    organizationId: number;
    acronym: string;
    fax: string;
    isActive: boolean;
    location: Location15;
    locationId: number;
    organizationName: string;
    organizationType: OrganizationType10;
    organizationTypeId: number;
    parentOrganizationId: number;
    phone: string;
    replacementOrganizationId: number;
    url: string;
    NAOrganization: boolean;
    external: boolean;
    linkCount: number;
    murepUnitId: number;
    ein: string;
    dunsNumber: string;
    msiData: MsiData10;
    setAsideData: string[];
}

export interface CoInvestigator {
    contactId: number;
    displayOrder: number;
    fax: string;
    firstName: string;
    lastName: string;
    fullName: string;
    fullNameInverted: string;
    location: Location14;
    locationId: number;
    middleInitial: string;
    organization: Organization5;
    prefix: string;
    primaryEmail: string;
    secondaryEmail: string;
    suffix: string;
    title: string;
    workPhoneExtension: string;
    workPhone: string;
    receiveEmail: number;
    isPublicEmail: boolean;
}

export interface LkuCodeType45 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface ContentType {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType45;
    displayOrder: number;
}

export interface File {
    fileId: number;
    url: string;
    fileSize: number;
    fileExtension: string;
    fileName: string;
}

export interface LibraryItem {
    id: number;
    title: string;
    contentType: ContentType;
    files: File[];
    description: string;
    url: string;
    publishedDateString: string;
    publishedBy: string;
}

export interface LkuCodeType46 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface ContentType2 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType46;
    displayOrder: number;
}

export interface File2 {
    fileId: number;
    url: string;
    fileSize: number;
    fileExtension: string;
    fileName: string;
}

export interface StiDaa {
    id: number;
    title: string;
    contentType: ContentType2;
    files: File2[];
    description: string;
    url: string;
    publishedDateString: string;
    publishedBy: string;
}

export interface LkuCodeType47 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface ContentType3 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType47;
    displayOrder: number;
}

export interface File3 {
    fileId: number;
    url: string;
    fileSize: number;
    fileExtension: string;
    fileName: string;
}

export interface CloseoutDocument {
    id: number;
    title: string;
    contentType: ContentType3;
    files: File3[];
    description: string;
    url: string;
    publishedDateString: string;
    publishedBy: string;
}

export interface LkuCodeType48 {
    lkuCodeTypeId: number;
    codeType: string;
    description: string;
}

export interface ContentType4 {
    lkuCodeId: number;
    code: string;
    description: string;
    lkuCodeTypeId: number;
    lkuCodeType: LkuCodeType48;
    displayOrder: number;
}

export interface File4 {
    fileId: number;
    url: string;
    fileSize: number;
    fileExtension: string;
    fileName: string;
}

export interface PrimaryImage {
    id: number;
    title: string;
    contentType: ContentType4;
    files: File4[];
    description: string;
    url: string;
    publishedDateString: string;
    publishedBy: string;
}

export interface IProject {
    projectId: number;
    lastUpdated: string;
    title: string;
    acronym: string;
    statusDescription: string;
    description: string;
    benefits: string;
    startDateString: string;
    endDateString: string;
    startTrl: number;
    currentTrl: number;
    endTrl: number;
    primaryTaxonomyNodes: PrimaryTaxonomyNode[];
    additionalTaxonomyNodes: AdditionalTaxonomyNode[];
    destinations: Destination[];
    supportedMission: SupportedMission;
    program: Program;
    responsibleMd: ResponsibleMd2;
    leadOrganization: LeadOrganization;
    supportingOrganizations: SupportingOrganization[];
    coFundingPartners: CoFundingPartner[];
    statesWithWork: StatesWithWork[];
    programDirectors: ProgramDirector[];
    programManagers: ProgramManager[];
    projectManagers: ProjectManager[];
    principalInvestigators: PrincipalInvestigator[];
    coInvestigators: CoInvestigator[];
    website: string;
    libraryItems: LibraryItem[];
    stiDaas: StiDaa[];
    closeoutSummary: string;
    closeoutDocuments: CloseoutDocument[];
    primaryImage: PrimaryImage;
}

export interface IFullProject {
    project: IProject;
}


