// Quick test script to verify order API
import axios from 'axios';

const testOrderAPI = async () => {
  const url = 'http://localhost:4000';
  
  try {
    // Test 1: Check if server is running
    console.log('🔍 Testing server connection...');
    const serverTest = await axios.get(url);
    console.log('✅ Server is running:', serverTest.data);
    
    // Test 2: Check food list
    console.log('🔍 Testing food list API...');
    const foodTest = await axios.get(url + '/api/food/list');
    console.log('✅ Food items available:', foodTest.data.data.length);
    
    // Test 3: Test order API (this will fail without auth, but shows if endpoint exists)
    console.log('🔍 Testing order endpoint...');
    try {
      await axios.post(url + '/api/order/place', {});
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('✅ Order endpoint exists (authentication required)');
      } else {
        console.log('📋 Order endpoint response:', error.response?.data);
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
};

// Run the test
console.log('🚀 Starting API tests...');
testOrderAPI();
