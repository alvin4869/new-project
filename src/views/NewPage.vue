<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <routerLink to="/newpage/a" class="list-group-item list-group-item-action">
          元件A
        </routerLink>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          元件B
        </router-link>
        <router-link to="/newpage/namedview" class="list-group-item list-group-item-action">
          具名路由
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <routerView/>
    </div>
  </div>
</template>
