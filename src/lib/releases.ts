export interface OtaResponse {
    response: OtaBuild[]
}

export interface OtaBuild {
    datetime: number
    filename: string
    id: string
    romtype: string
    size: number
    url: string
    version: string
}

export interface Release {
    version: string
    releaseType: string
    releaseDate: string
    androidVersion: string
    securityPatch: string
    changelog: string[]
    knownIssues: string[]
}

export async function fetchLatestBuild(
    codename: string
): Promise<OtaBuild> {
    const response = await fetch(
        `https://bloomoslabs.github.io/ota/devices/v1/${codename}.json`
    )

    if (!response.ok) {
        throw new Error('Unable to fetch OTA metadata.')
    }

    const json: OtaResponse = await response.json()

    if (!json.response.length) {
        throw new Error('No builds available.')
    }

    return json.response[0]
}

export async function fetchChangelog(
    codename: string
): Promise<Release[]> {
    const response = await fetch(
        `https://bloomoslabs.github.io/ota/changelogs/${codename}.json`
    )

    if (!response.ok) {
        throw new Error('Unable to fetch changelog.')
    }

    return response.json()
}