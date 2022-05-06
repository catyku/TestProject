<%-- 
    Document   : index
    Created on : 2022年4月29日, 上午11:42:22
    Author     : MG
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement"%>
<%!
    public class MariaDBConn {
        final String driver="org.mariadb.jdbc.Driver";
        final String url = "jdbc:mariadb://127.0.0.1:3306/test";
        final String user = "root";
        final String password = "";
        Connection conn = null;

        public MariaDBConn(String url, String user, String password){
            try {
                Class.forName(driver);
                conn = DriverManager.getConnection(url, user, password);
                System.out.print("資料庫連接成功");
            }catch(ClassNotFoundException | SQLException e){
                e.printStackTrace();
            }
        }
        public Connection getConn(){
            return conn;
        }
        public void setConn(Connection conn){
            this.conn = conn;
        }
        public void closeConn(){
            try {
                conn.close();
            }catch (SQLException e){
                e.printStackTrace();
            }
	}
    }
%>
<html>
    <head><title>Hello World - JSP</title></head>
    <body>
       <%
           
       %>       
    </body>
</html>
