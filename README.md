# VO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Victorio Ortega

## Ejemplo 

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'vo-product-card
```

```
    <ProductCard 
      product={ product }
      initialValues={{
        count   : 4,
        maxCount: 10,
      }}
    >
      {
        ({ reset, incresBy,maxCount, count, isMaxCountReached }) => (
          <>
            <ProductImage   />
            <ProductTitle   />
            <ProductButtons />              
          </>
        )
      }
    </ProductCard>
```