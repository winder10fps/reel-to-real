export const CollectionPage = () => {
  return (
    <div className='collection-page'>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {/* <ProductList category={categorySlug} /> */}
        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>Товар 1</div>
        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>Товар 2</div>
        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>Товар 3</div>
      </div>
    </div>
  )
}