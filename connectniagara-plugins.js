module.exports = ({ env }) => ({
  // ...

  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::organization.organization",
          modelName: "organiaztion",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "Name",
                weight: 100,
              },
              {
                name: "Description",
                weight: 50,
              },
			  {
				name: "Category",
				weight: 50,
			  }
            ],
          },
        },
        {
          uid: "api::eat-and-drink-card.eat-and-drink-card",
          modelName: "eat-and-drink-card",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "location",
                weight: 20,
              },
            ],
          },
        },
        {
          uid: "api::event-card.event-card",
          modelName: "event-card",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "description",
                weight: 50,
              },
            ],
          },
        },
        {
          uid: "api::explore.explore",
          modelName: "explore",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "location",
                weight: 50,
              },
            ],
          },
        },
        {
          uid: "api::initiative-card.initiative-card",
          modelName: "initiative-card",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "location",
                weight: 30,
              },
              {
                name: "description",
                weight: 50,
              },
            ],
          },
        },
        {
          uid: "api::resource.resource",
          modelName: "resource",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "Name",
                weight: 100,
              },
              {
                name: "ProvidedBy",
                weight: 50,
              },
            ],
          },
        },
        {
          uid: "api::shop.shop",
          modelName: "shop",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "location",
                weight: 50,
              },
            ],
          },
        },
        {
          uid: "api::space.space",
          modelName: "space",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "Name",
                weight: 100,
              },
              {
                name: "Location",
                weight: 30,
              },
              {
                name: "Description",
                weight: 50,
              },
            ],
          },
        },
        {
          uid: "api::volunteer-card.volunteer-card",
          modelName: "volunteer-card",
          transliterate: false,

          fuzzysortOptions: {
            limit: 10,
            characterLimit: 300,
            threshold: -4000,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "location",
                weight: 10,
              },
            ],
          },
        },
      ],
    },
  },

  // ...
});
