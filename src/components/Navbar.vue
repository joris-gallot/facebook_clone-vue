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
        class="hover:bg-gray-hover px-12 py-3.5 rounded-lg cursor-pointer transition duration-100 ease-in focus:outline-none"
      >
        <font-awesome-icon icon="desktop" size="lg" />
      </div>

      <div
        content="Marketplace"
        v-tippy
        class="hover:bg-gray-hover px-12 py-3.5 rounded-lg cursor-pointer transition duration-100 ease-in focus:outline-none"
      >
        <font-awesome-icon icon="store" size="lg" />
      </div>

      <div
        v-tippy
        content="Groupes"
        class="hover:bg-gray-hover px-12 py-3.5 rounded-lg cursor-pointer transition duration-100 ease-in focus:outline-none"
      >
        <font-awesome-icon icon="users" size="lg" />
      </div>

      <div
        v-tippy
        content="Gaming"
        class="hover:bg-gray-hover px-12 py-3.5 rounded-lg cursor-pointer transition duration-100 ease-in focus:outline-none"
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
        <button
          class="bg-button p-1 rounded-full w-10 h-10 hover:bg-gray-hover transition duration-100 ease-in focus:outline-none"
        >
          <font-awesome-icon icon="plus" />
        </button>
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
export default {}
</script>
