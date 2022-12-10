// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import User from "../../../models/User";
// import db from "../../../utils/db";
// import bcrypt from "bcryptjs";

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     CredentialsProvider({
//       type: "credentials",
//       credentials: {},
//       async authorize(credentials, req) {
//         try {
//           const { email, password } = credentials;
//           // Perform login logic
//           // Find the user in the db
//           db.connect();
//           const user = await User.findOne({
//             email: email,
//           }).exec();
//           db.disconnect();
//           const validPassword = await bcrypt.compare(password, user.password);
//           console.log("Authenticated User: " + user);
//           if (!validPassword) {
//             throw new Error("Invalid user's credentials!");
//           }
//           return user;
//         } catch (error) {
//           console.log("Error: " + error.message);
//           return null;
//         }
//       },
//     }),
//   ],
//   database: process.env.DB_URL,
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       console.log(session);
//       console.log(token);
//       if (session?.user) {
//         session.user.id = token.uid;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/signin",
//     error: "/auth/error",
//   },
// });


import bcryptjs from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/User';
// import db from '../../../utils/db';
import db from '/middleware/db'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        const user = await User.findOne({
          email: credentials.email,
        });
        await db.disconnect();
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: 'f',
            isAdmin: user.isAdmin,
          };
        }
        throw new Error('Invalid email or password');
      },
    }),
  ],
});
