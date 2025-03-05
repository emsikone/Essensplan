<template>
    <div class="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-pink-100 to-blue-100 px-4">
      <div class="w-full max-w-md">
        <!-- Logo und App-Titel -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-3xl font-bold mb-4 shadow-lg">
            YP
          </div>
          <h1 class="text-3xl font-bold text-indigo-600">Yummy Planner</h1>
          <p class="text-gray-600 mt-2">Dein freundlicher Essensplaner</p>
        </div>
        
        <!-- Login Box -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <!-- Tabs für Login/Register -->
          <div class="flex border-b">
            <button 
              @click="activeTab = 'login'" 
              class="flex-1 py-4 px-6 text-center font-medium text-lg transition-colors duration-300"
              :class="activeTab === 'login' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'"
            >
              Anmelden
            </button>
            <button 
              @click="activeTab = 'register'" 
              class="flex-1 py-4 px-6 text-center font-medium text-lg transition-colors duration-300"
              :class="activeTab === 'register' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'"
            >
              Registrieren
            </button>
          </div>
          
          <!-- Login Form -->
          <div v-if="activeTab === 'login'" class="p-6 space-y-6">
            <form @submit.prevent="handleLogin">
              <div class="space-y-4">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="loginForm.email"
                    class="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label for="password" class="block text-sm font-medium text-gray-700">Passwort</label>
                    <button 
                      type="button" 
                      @click="showForgotPassword = true"
                      class="text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      Passwort vergessen?
                    </button>
                  </div>
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="password" 
                    v-model="loginForm.password"
                    class="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    id="show-password" 
                    v-model="showPassword"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="show-password" class="ml-2 block text-sm text-gray-700">
                    Passwort anzeigen
                  </label>
                </div>
                
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember-me" 
                    v-model="loginForm.rememberMe"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                    Angemeldet bleiben
                  </label>
                </div>
              </div>
              
              <div class="mt-6">
                <button 
                  type="submit"
                  class="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
                >
                  Anmelden
                </button>
              </div>
            </form>
            
            <div class="mt-6 relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Oder anmelden mit</span>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-3 mt-6">
              <button 
                type="button"
                class="py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Facebook
              </button>
              <button 
                type="button"
                class="py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md"
              >
                Google
              </button>
            </div>
          </div>
          
          <!-- Register Form -->
          <div v-if="activeTab === 'register'" class="p-6 space-y-6">
            <form @submit.prevent="handleRegister">
              <div class="space-y-4">
                <div>
                  <label for="register-name" class="block text-sm font-medium text-gray-700 mb-1">Vollständiger Name</label>
                  <input 
                    type="text" 
                    id="register-name" 
                    v-model="registerForm.name"
                    class="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label for="register-email" class="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input 
                    type="email" 
                    id="register-email" 
                    v-model="registerForm.email"
                    class="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label for="register-password" class="block text-sm font-medium text-gray-700 mb-1">Passwort</label>
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="register-password" 
                    v-model="registerForm.password"
                    class="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label for="register-confirm-password" class="block text-sm font-medium text-gray-700 mb-1">Passwort bestätigen</label>
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="register-confirm-password" 
                    v-model="registerForm.confirmPassword"
                    class="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    id="register-show-password" 
                    v-model="showPassword"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="register-show-password" class="ml-2 block text-sm text-gray-700">
                    Passwort anzeigen
                  </label>
                </div>
                
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    v-model="registerForm.acceptTerms"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    required
                  />
                  <label for="terms" class="ml-2 block text-sm text-gray-700">
                    Ich akzeptiere die <a href="#" class="text-indigo-600 hover:text-indigo-800">Nutzungsbedingungen</a> und <a href="#" class="text-indigo-600 hover:text-indigo-800">Datenschutzrichtlinien</a>
                  </label>
                </div>
              </div>
              
              <div class="mt-6">
                <button 
                  type="submit"
                  class="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
                >
                  Registrieren
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <!-- Forgot Password Modal -->
        <div v-if="showForgotPassword" class="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl p-6 w-full max-w-md m-auto">
            <h2 class="text-xl font-semibold text-indigo-600 mb-4">Passwort zurücksetzen</h2>
            <p class="text-gray-600 mb-4">Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts.</p>
            
            <form @submit.prevent="handleForgotPassword">
              <div class="mb-4">
                <label for="reset-email" class="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                <input 
                  type="email" 
                  id="reset-email" 
                  v-model="forgotPasswordEmail"
                  class="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div class="flex justify-end gap-3">
                <button 
                  type="button" 
                  @click="showForgotPassword = false"
                  class="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300"
                >
                  Abbrechen
                </button>
                <button 
                  type="submit"
                  class="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors duration-300"
                >
                  Senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activeTab = ref('login');
  const showPassword = ref(false);
  const showForgotPassword = ref(false);
  const forgotPasswordEmail = ref('');
  
  const loginForm = ref({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const registerForm = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const handleLogin = () => {
    // Hier die Login-Logik implementieren
    console.log('Login mit:', loginForm.value);
  };
  
  const handleRegister = () => {
    // Hier die Registrierungs-Logik implementieren
    if (registerForm.value.password !== registerForm.value.confirmPassword) {
      alert('Die Passwörter stimmen nicht überein!');
      return;
    }
    
    console.log('Registrierung mit:', registerForm.value);
  };
  
  const handleForgotPassword = () => {
    // Hier die Passwort-Vergessen-Logik implementieren
    console.log('Passwort zurücksetzen für:', forgotPasswordEmail.value);
    alert(`Ein Link zum Zurücksetzen des Passworts wurde an ${forgotPasswordEmail.value} gesendet.`);
    showForgotPassword.value = false;
    forgotPasswordEmail.value = '';
  };
  </script>
  
  