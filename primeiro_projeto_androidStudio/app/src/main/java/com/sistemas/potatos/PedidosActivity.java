package com.sistemas.potatos;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class PedidosActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pedidos);
    }
    public void abreContato (View view) {
        Intent intent = new Intent(this, ContatoActivity.class);
        startActivity(intent);
    }
    public void voltarTela (View view) {
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
    }
    public void abrePagamento (View view) {
        Intent intent = new Intent(this, PagamentoActivity.class);
        startActivity(intent);
    }
}