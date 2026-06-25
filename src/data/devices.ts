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
    status: "Official" | "Community"
}

export const devices: Device[] = [
    {
        name: 'OPPO A31',
        codename: 'OP4C7D',
        manufacturer: 'OPPO',
        androidVersion: '9 Pie',
        maintainers: [
            {
                id: "bloomoslabs",
                name: "BloomOS-Labs",
                github: "BloomOS-Labs",
                telegram: "BloomOSLabs"
            }
        ],
    status: 'Official'
    }
]