#!/bin/bash
# Create page.tsx for each route
for dir in app/info/{seller,wholesaler,agent} app/our-leadership app/login app/onboarding app/user/{profile,verify-now,contact,notifications,inbox,buy,my-bids,bid-details,seller-counter,counter-bid,my-offers,offer-details} app/user/buy/preference "app/user/contact/[id]" "app/user/property-details/[id]" "app/user/bid-details/[id]" "app/user/offer-details/[id]" app/find-your-next-deal app/sell app/sell/add app/affiliate app/property-details-admin app/upload-contacts; do
  if [ ! -f "$dir/page.tsx" ]; then
    page_name=$(basename "$dir")
    cat > "$dir/page.tsx" << INNER_EOF
export default function ${page_name^}Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">$page_name</h1>
      <p>This is the $page_name page.</p>
    </div>
  );
}
INNER_EOF
    echo "✅ Created $dir/page.tsx"
  fi
done
echo ""
echo "✅ All page.tsx files created!"
echo "Run 'npm run dev -- -p 3000' to test"
