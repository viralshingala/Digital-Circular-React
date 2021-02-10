const baseUrl = 'https://s7d2.scene7.com/is/image/PetSmart/'
const baseContentUrl = 'https://s7d2.scene7.com/is/content/PetSmart/'

const URL_CONFIG = {
	baseUrl: baseUrl,
	baseContentUrl:baseContentUrl,
	baseImageUrl: `${baseUrl}IMAGE_ID?fmt=png`,
	skuUrl: `${baseUrl}SKU_ID?$sclp-prd-main_large$`,
	menuImageUrl: `${baseUrl}MENU_IMAGE_ID?fmt=jpg`,
	contentUrl:`${baseContentUrl}IMAGE_ID?fmt=jpg`,
	menuContentUrl:`${baseContentUrl}MENU_IMAGE_ID?fmt=jpg`
}
export default URL_CONFIG
