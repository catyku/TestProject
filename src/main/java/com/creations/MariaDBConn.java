package com.creations;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MariaDBConn {

    final String driver = "org.mariadb.jdbc.Driver";
    final String url = "jdbc:mariadb://127.0.0.1:3306/test";
    final String user = "root";
    final String password = "";
    Connection conn = null;

    public MariaDBConn() {
        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(url, user, password);
            System.out.print("資料庫連接成功");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    public Connection getConn() {
        return conn;
    }

    public void setConn(Connection conn) {
        this.conn = conn;
    }

    public void closeConn() {
        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
