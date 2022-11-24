export default {
    name: "pin",
    title: "pin",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "about",
        title: "About",
        type: "string",
      },
      {
        name: "descrip",
        title: "Descrip",
        type: "url",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
      },
      {
        name: "image",
        title: "image",
        type: "image",
        Options: {
hotspot: true
      },
      {
        name: "userId",
        title: "UserId",
        type: "string",
      },
      {
        name: "postedBy",
        title: "PostedBy",
        type: "postedBy",
      },
      {
        name: "save",
        title: "Save",
        type: "array",
        of: [{type: 'comment'}]
      },
    ],
  };
  