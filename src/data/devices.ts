export interface Maintainer {
    id: string
    name: string
    github?: string
    telegram?: string
}

export interface Device {
    name: string
    codename: string
    manufacturer: string
    androidVersion: string
    maintainers: Maintainer[]
    image?: string
    status: "Official" | "Community"
}

export const devices: Device[] = [
    {
        name: 'OPPO A31',
        codename: 'OP4C7D, CPH2015',
        manufacturer: 'OPPO',
        androidVersion: '9',
        maintainers: [
            {
                id: "bloomoslabs",
                name: "BloomOS Labs",
                github: "BloomOSLabs",
                telegram: "BloomOSLabs"
            }
        ],
        image: '/devices/OP4C7D.png',
        status: 'Official',
    }
]