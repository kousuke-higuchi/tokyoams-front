import { Coordinate } from ".";
/**
 * �������ꗗ���
 */
export interface Fbg2Summary {
    id: number;
    code: string;
    name: string;
    office: string;
    area: string;
    placestart: string;
    placeend: string;
    latitude: number;
    longitude: number;
    routeName: string;
    wgsCoordinate: Coordinate;
    formattedAddress: string;
}

/**
 * ������ �䒠�l��2 �Ϗ󒲏�
 */
 export interface Fbg2Damage {
    bridgeid: number;
    investdate?: number;
    investobject?: string;
    investreport?: string;
    investtrader?: string;
    createDate?: string;
};

/**
 * ������ �䒠�l��2 ��ʗʒ���
 */
 export interface Fbg2Trafficcensus {
    bridgeid: number;
    censusdate?: number;
    carvolume?: number;
    largeratio?: number;
    largevolume?: number;
    othervolume?: number;
    motorbike?: number;
    bicycle?: number;
    walker?: number;
    memo?: string;
    createDate?: string;
};

/**
 * ������ �䒠�l��2 �~�n����
 */
 export interface Fbg2Ground {
    bridgeid: number;
    id: number;
    underid: number;
    undername?: string;
    contact?: string;
    period?: string;
};

/**
 * ������ �䒠�l��2 ��p�E�Y�˕�������
 */
 export interface Fbg2Exclusiveuse {
    bridgeid: number;
    approvedate?: number;
    owner?: string;
    kindsize?: string;
    weight?: number;
    unitname?: string;
    contact?: string;
    createDate?: number;
};

/**
 * ������ �䒠�l��2 �h������
 */
 export interface Fbg2Paint {
    bridgeid: number;
    supergeneral?: number;
    superspecial?: number;
    subgeneral?: number;
    subspecial?: number;
    railing?: number;
    light?: number;
    total?: number;
};

/**
 * ������ �䒠�l��4 �ʐ^�䒠
 */
 export interface Fbg2Picture {
    pictureid: number;
    pictnumber?: number;
    createnumstring?: string;
    pictureimg?: string;
};

/**
 * ������ �䒠�l��4 �ʐ^�䒠-�B�e�����ē��}
 */
 export interface Fbg2Pictureinfo {
    id: number;
    pictureimg?: string;
};

/**
 * ������ �䒠�l��5 ���ʐ}
 */
 export interface Fbg2Floorplan {
    id: number;
    img?: string;
};

/**
 * ������ �䒠�l��6 ���̐}
 */
 export interface Fbg2Elevation {
    id: number;
    img?: string;
};

/**
 * ������ �䒠�l��8 ���s�Ҍ�ʗʈē��}
 */
 export interface Fbg2WalkGuideMap {
    id: number;
    img?: string;
};

/**
 * ������ ����_���l��4 ����_���ʐ^
 */
 export interface Fbg2Periodinsppicture {
    periodinspid: number;
    id: number;
    spanno?: string;
    pictno?: number;
    partname?: string;
    damagekind?: string;
    situation?: string;
    judgeid?: string;
    img?: string;
};

/**
 * ������ ����_���l��5 �����}
 */
 export interface Fbg2Periodinspdamage {
    periodinspid: number;
    spanid: number;
    id: number;
    img?: string;
};

/**
 * ������ ���l��2
 */
 export interface Fbg2Minitryinsppicture {
    minitryid: number;
    id: number;
    photonumber?: string;
    judgeinspect?: string;
    createParts?: string;
    pictureimg?: string;
};