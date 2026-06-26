const OTA_BASE = 'https://bloomoslabs.github.io/ota'

export async function fetchLatestChangelog(
    codename: string,
    version = '1.0'
): Promise<string> {
    const response = await fetch(
        `${OTA_BASE}/changelogs/${codename}/${version}.txt`
    )

    if (!response.ok) {
        throw new Error('Failed to fetch changelog.')
    }

    return response.text()
}