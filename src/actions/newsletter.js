import { SET_NEWSLETTERS } from "./types";

export function fetchNewsletters() {
  const response = {
    data: [
      {
        _id: "51861841",
        title: "Happy Holidays",
        body:
          "is simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem is simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem is simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Loremis simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem",
        date: new Date(),
        imageUrl: "http://via.placeholder.com/700x258",
      },
      {
        _id: "68766484",
        title: "Happy Christmas",
        body:
          "Heeeeeeeeeeeeeeeeeeeeeeeeey text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem is simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem is simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Loremis simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem",
        date: new Date(),
        imageUrl: "http://via.placeholder.com/700x258",
      },
    ],
  };

  return {
    type: SET_NEWSLETTERS,
    payload: response.data,
  };
}
