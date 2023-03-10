package com.sistemas.potatos;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class ContatoActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contato);
    }
    public void voltarTela (View view) {
        Intent intent = new Intent(this, PedidosActivity.class);
        startActivity(intent);
    }
}
