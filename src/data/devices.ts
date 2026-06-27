export interface Maintainer {
    id: string
    name: string
    github?: string
    telegram?: string
}

export interface Device {
    name: string
    codename: string
    alternateCodenames?: string,
    manufacturer: string
    androidVersion: string
    currentVersion: string,
    maintainers: Maintainer[]
    image?: string
    status: "Official" | "Community"
}

export const devices: Device[] = [
    {
        name: 'OPPO A31',
        codename: 'OP4C7D',
        alternateCodenames: 'CPH2015',
        manufacturer: 'OPPO',
        androidVersion: '9',
        currentVersion: '1.0',
        maintainers: [
            {
                id: "stanlysilas",
                name: "Stanly Silas",
                github: "stanlysilas",
                telegram: "stanlysilas"
            }
        ],
        image: '/devices/OP4C7D.png',
        status: 'Official',
    }
]