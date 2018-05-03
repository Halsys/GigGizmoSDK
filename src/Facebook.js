/**
 * Created by corynull on 4/23/17.
 */

import API from "./API";

export default class Facebook {
	static FindPage(pageName) {
		return new Promise((resolve, reject) => {
			if (typeof pageName !== "string") {
				reject(new Error("pageName is not a string!"));
			} else {
				API.Call("GET", "/API/Facebook/Page/Find", { name: pageName }).then(
					resolve,
					reject
				);
			}
		});
	}

	static PostToPage(format, text, pageId, postDateTime) {
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/Facebook/Page/Post", {
				post_format: format,
				post_text: text,
				fb_page_id: pageId,
				publish_time: postDateTime // .getTime() / 1000
			}).then(resolve, reject);
		});
	}
}
