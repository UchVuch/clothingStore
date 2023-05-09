<template>
  <div class="card__inner">
    <div class="card__top">
      <div class="card__full-info">
        <p class="card__title">
          {{ product.brand }}
        </p>
        <p class="card__text">
          {{ product.text }}
        </p>
      </div>
      <img 
        class="card__image"
        :src="product.img" 
        :alt="product.description"
        width="352"
        height="420"
      >
    </div>
    <span class="card__price">
      {{ product.price }} руб
    </span>
    <span class="card__brand">
      <span class="card__brand-name">Бренд</span>
      <span class="card__brand-info">{{ product.brand }}</span>
    </span>
    <span class="card__description"> 
      {{ product.description }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'product-item',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.card__inner {
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 24px;
}
.card__top {
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
}

.card__top:hover .card__full-info {
  transform: translateY(0);
}

.card__full-info {
  transform: translateY(100%);
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding: 32px 20px;
  transition: transform 0.3s ease-in;
}

.card__title {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #354153;
  margin-bottom: 16px;
}

.card__text {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #354153;
}

.card__price {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #0D1421;
  margin-bottom: 16px;
}
.card__brand {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
}
.card__brand-name {
  color: #667085;
}

.card__brand-info {
  color: #354153;
}
.card__description {
  color: #667085;
  font-size: 14px;
  line-height: 20px;
}
</style>