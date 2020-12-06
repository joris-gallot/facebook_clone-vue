<template>
  <div
    class="bg-card text-white text-base h-14 flex items-center justify-between px-4 border-gray-border border-b"
  >
    <div class="flex items-center">
      <div class="relative flex items-center justify-center cursor-pointer">
        <div
          style="margin-top: 1px"
          class="bg-white rounded-full w-logo h-logo z-0"
        ></div>
        <font-awesome-icon
          class="text-primary z-50 absolute top-0"
          size="3x"
          :icon="['fab', 'facebook']"
        />
      </div>
      <div class="bg-input rounded-full py-2 px-3 ml-2">
        <font-awesome-icon icon="search" class="mr-3" />
        <input
          class="bg-input focus:outline-none w-52"
          placeholder="Rechercher sur Facebook"
          type="text"
        />
      </div>
    </div>

    <div class="flex items-center space-x-2">
      <div
        v-tippy
        content="Accueil"
        class="px-12 py-3.5 cursor-pointer border-b-3 border-primary focus:outline-none"
      >
        <font-awesome-icon class="text-primary" icon="home" size="lg" />
      </div>

      <div
        content="Watch"
        v-tippy
        class="hover:bg-gray-hover px-12 py-3.5 rounded-lg cursor-pointer transition duration-50 ease-in focus:outline-none"
      >
        <font-awesome-icon icon="desktop" size="lg" />
      </div>

      <div
        content="Marketplace"
        v-tippy
        class="hover:bg-gray-hover px-12 py-3.5 rounded-lg cursor-pointer transition duration-50 ease-in focus:outline-none"
      >
        <font-awesome-icon icon="store" size="lg" />
      </div>

      <div
        v-tippy
        content="Groupes"
        class="hover:bg-gray-hover px-12 py-3.5 rounded-lg cursor-pointer transition duration-50 ease-in focus:outline-none"
      >
        <font-awesome-icon icon="users" size="lg" />
      </div>

      <div
        v-tippy
        content="Gaming"
        class="hover:bg-gray-hover px-12 py-3.5 rounded-lg cursor-pointer transition duration-50 ease-in focus:outline-none"
      >
        <font-awesome-icon icon="gamepad" size="lg" />
      </div>
    </div>

    <div class="flex items-center">
      <div
        class="flex items-center hover:bg-gray-hover rounded-full p-1 cursor-pointer mr-4 transition duration-100 ease-in"
      >
        <img
          src="https://i.pravatar.cc/300"
          alt="avatar"
          class="rounded-full w-8 h-8 mr-2"
        />
        <span class="mr-2">Simon</span>
      </div>
      <div class="flex items-center space-x-2">
        <dropdown :minWidth="375" :maxWidth="375" position="bottom">
          <template #trigger="{ open }">
            <button
              :class="
                open
                  ? 'bg-primary bg-opacity-20 hover:bg-opacity-30'
                  : 'bg-button hover:bg-gray-hover'
              "
              class="p-1 rounded-full w-10 h-10  transition duration-100 ease-in focus:outline-none"
            >
              <font-awesome-icon
                :class="open ? 'text-primary' : 'text-white'"
                icon="plus"
              />
            </button>
          </template>

          <template #content>
            <div
              class="bg-card rounded-lg px-3 pt-3 pb-2 border border-gray-border space-y-3"
            >
              <span class="text-2xl font-bold ml-1">Créer</span>
              <div class="flex flex-col">
                <list-item
                  v-for="(item, index) in items.slice(0, 3)"
                  :item="item"
                  :key="index"
                />

                <hr class="text-gray-border my-2" />

                <list-item
                  v-for="(item, index) in items.slice(3)"
                  :item="item"
                  :key="index"
                />
              </div>
            </div>
          </template>
        </dropdown>

        <button
          class="bg-button p-1 rounded-full w-10 h-10 hover:bg-gray-hover transition duration-100 ease-in focus:outline-none"
        >
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
        </button>
        <div class="relative h-14 flex justify-center items-center">
          <div
            class="bg-danger px-1 absolute top-1 -right-2 rounded-full text-xs font-bold"
          >
            20+
          </div>
          <button
            class="bg-button p-1 rounded-full w-10 h-10 hover:bg-gray-hover transition duration-100 ease-in focus:outline-none"
          >
            <font-awesome-icon icon="bell" />
          </button>
        </div>
        <button
          class="bg-button p-1 rounded-full w-10 h-10 hover:bg-gray-hover transition duration-100 ease-in focus:outline-none"
        >
          <font-awesome-icon size="lg" icon="caret-down" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './common/ListItem.vue'
export default {
  components: { ListItem },
  data() {
    return {
      items: [
        {
          title: 'Publication',
          description: "Partagez une publication sur le fil d'actualité.",
          icon: 'edit',
        },
        {
          title: 'Story',
          description: 'Partagez une photo ou un message.',
          icon: 'book-open',
        },
        {
          title: 'Évènement marquant',
          description: 'Ajoutez un évènement marquant sur votre profil.',
          icon: 'star',
        },
        {
          title: 'Page',
          description: 'Communiquez et partagez avec vos clients ou fans.',
          icon: 'flag',
        },
        {
          title: 'Groupe',
          description:
            "Communiquez avec des personnes qui partagent vos centres d'intérêt.",
          icon: 'users',
        },
        {
          title: 'Évènement',
          description:
            "Rassemblez les gens autour d'un évènement public ou privé.",
          icon: 'calendar-plus',
        },
        {
          title: 'Petite annonce Marketplace',
          description: 'Vendez des articles aux membres de votre communauté.',
          icon: 'shopping-basket',
        },
        {
          title: 'Collecte de fonds',
          description: 'Levez des fonds pour une cause qui tient à cœur.',
          icon: 'hand-holding-heart',
        },
      ],
    }
  },
}
</script>
